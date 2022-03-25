import store from "@store";

export const totalTasks = (obj) => {
  let task = [];
  let tasks = [];
  let temp = Object.values(obj);
  // Week
  temp.forEach((item, idx) => {
    // Days
    Object.entries(item).forEach((item2) => {
      //Tasks
      tasks = Object.entries(item2[1]).forEach((item3) => {
        item3[1].id = item3[0];
        item3[1].day_id = item2[0];
        task.push(item3[1]);
      });
    });
  });
  return task;
};

export const graphTasks = (arr) => {
  let data = [
    {
      name: "Sunday",
      uv: 0,
      tasks: [],
    },
    {
      name: "Monday",
      uv: 0,
      tasks: [],
    },
    {
      name: "Tuesday",
      uv: 0,
      tasks: [],
    },
    {
      name: "Wednesday",
      uv: 0,
      tasks: [],
    },
    {
      name: "Thursday",
      uv: 0,
      tasks: [],
    },
    {
      name: "Friday",
      uv: 0,
      tasks: [],
    },
    {
      name: "Saturday",
      uv: 0,
      tasks: [],
    },
  ];
  arr.map((item) => {
    data[item.day_id].uv += 1;
    data[item.day_id].tasks.push(item);
  });
  return data;
};
