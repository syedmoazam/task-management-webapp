export const totalTasks = (obj) => {
  let task = [];
  let tasks = [];
  let temp = Object.values(obj);
  temp.forEach((item) => {
    Object.values(item).forEach((item2) => {
      tasks = Object.entries(item2).forEach((item3) => {
        item3[1].id = item3[0];
        task.push(item3[1]);
      });
    });
  });
  return task;
};
