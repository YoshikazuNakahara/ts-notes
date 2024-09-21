type Employee = {
  id: number;
  name: string;
};

type Project = {
  id: string;
  name: string;
  members: Employee[];
};

const projects: Project[] = [
  {
    id: "P1",
    name: "Webサイトリニューアル",
    members: [
      { id: 1, name: "山田" },
      { id: 2, name: "伊藤" },
    ],
  },
  {
    id: "P2",
    name: "モバイルアプリ開発",
    members: [
      { id: 2, name: "伊藤" },
      { id: 3, name: "中村" },
    ],
  },
];

// 課題: 複数のプロジェクトに参加している従業員の名前を配列で返す関数を作成してください。
// 答え　[ '伊藤' ]

type ProjectMember = Employee & { projectId: string; projectName: string }
type ProjectCounter = { projectId:string, name:string; count:number};

const func = (projects: Project[]):string[] => {
  const projectMembers:ProjectMember[] = projects.reduce((prev: ProjectMember[], cur: Project):ProjectMember[] => {
    const tmp:ProjectMember[] = cur.members.map((member: Employee):ProjectMember => 
            ({id: member.id, name: member.name, projectId: cur.id, projectName: cur.name}));
    return prev.concat(tmp);
  }, []);

  const projectCounters:ProjectCounter[] = projectMembers.reduce((prev: ProjectCounter[], cur: ProjectMember) => {
    const item:ProjectCounter|undefined = prev.find((projectCounter: ProjectCounter):boolean => projectCounter.projectId !== cur.projectId
                && projectCounter.name === cur.name);
    if (item === undefined)
      prev.push({projectId: cur.projectId, name: cur.name, count: 1});
    else
      item.count += 1;
    return prev;
  }, []);

  return projectCounters.filter(x => x.count > 1).map((projectCounter: ProjectCounter) => projectCounter.name);
} 

console.log(func(projects));
