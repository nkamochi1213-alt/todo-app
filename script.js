
let tasks = [];

// 🔽 初回読み込み
const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
  tasks = JSON.parse(savedTasks);
}

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// 🔽 描画
const render = () => {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks)); // 保存
      render();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
};

// 🔽 追加
button.onclick = () => {
  const task = input.value;
  if (task === "") return;

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks)); // 保存
  render();

  input.value = "";
};

// 🔽 初回表示
render();