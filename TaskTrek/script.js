document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskTitle = document.getElementById('taskTitle');
  const taskDesc = document.getElementById('taskDesc');
  const tasksContainer = document.getElementById('tasksContainer');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskTitle.value.trim();
    const desc = taskDesc.value.trim();

    if (!title) return;

    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    taskCard.innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <button class="delete-btn">X</button>
    `;

    taskCard.querySelector('.delete-btn').addEventListener('click', () => {
      taskCard.remove();
    });

    tasksContainer.appendChild(taskCard);

    // Reset form
    taskTitle.value = '';
    taskDesc.value = '';
  });
});
