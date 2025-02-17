const lists = document.getElementsByClassName('list');
const rightBox = document.getElementById('right');
const leftBox = document.getElementById('left');

const addTaskForm = document.getElementById('addTaskForm');
const taskInput = document.getElementById('taskInput');

let selected = null;

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(targetBox) {
    return function(e) {
        if(selected) {
            targetBox.appendChild(selected);
            selected = null;
        }
    };
}

//RightBox & leftBox
rightBox.addEventListener('dragover', handleDragOver);
rightBox.addEventListener('drop', handleDrop(rightBox));

leftBox.addEventListener('dragover', handleDragOver);
leftBox.addEventListener('drop', handleDrop(leftBox));

function addDragHandlers(element) {
    element.addEventListener('dragstart', function(e) {
        selected = e.target;
    });
}

Array.from(lists).forEach(list => {
    addDragHandlers(list);
});

// ADD TASK
addTaskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    if(taskText) {
        const newTask = document.createElement('div');
        newTask.className = 'list';
        newTask.draggable = true;

        const taskImage = document.createElement('img');
        taskImage.src = 'img/drag.png';

        const taskTextNode = document.createTextNode(taskText);

        // newTask.textContent = taskText;
        newTask.appendChild(taskImage);
        newTask.appendChild(taskTextNode);
        
        leftBox.appendChild(newTask);
        taskInput.value = '';
        addDragHandlers(newTask);
    }
});


//FIRST VER
// for(list of lists){
//     list.addEventListener('dragstart', function(e){
//         let selected = e.target;

//         rightBox.addEventListener('dragover', function(e){
//             e.preventDefault();
//         });
//         rightBox.addEventListener('drop', function(e){
//             rightBox.appendChild(selected);
//             selected = null;
//         });

//         leftBox.addEventListener('dragover', function(e){
//             e.preventDefault();
//         });
//         leftBox.addEventListener('drop', function(e){
//             leftBox.appendChild(selected);
//             selected = null;
//         });
//     })
// }
