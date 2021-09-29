import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Header,
  Container,
  Button,
  Grid,
  List,
  Divider,
} from "semantic-ui-react";

import Task from "../components/Task";
import NewTaskForm from "../components/newTaskForm";
import EditTaskForm from "../components/editTaskForm";

const HomePage = () => {
  const initialNewTask = {
    name: "",
    color: "",
    icon: "",
  };

  //for opening and closing the task form on the page
  const [newTaskOpen, setNewTaskOpen] = React.useState(false);
  //for adding task to array of tasks (list)
  const [newTask, setNewTask] = React.useState(initialNewTask);
  //to edit current task
  const [editCurrentTask, setEditCurrentTask] = React.useState(-1);
  //array of tasks
  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask() {
    setNewTaskOpen(false);
  }

  function openEditTask(index) {
    setEditCurrentTask(index);
  }

  function closeEditTask() {
    setEditCurrentTask(-1);
  }

  function addNewTask() {
    const listClone = [...list];
    listClone.push(newTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }

  function editTask(index, changed) {
    console.log("test");
    const newList = list.map((task, i) => {
      if (i !== index) return task;
      return {
        name: changed.name,
        color: changed.color,
        icon: changed.icon,
      };
    });
    setList(newList);
  }

  function deleteTask(index) {
    //Array.filter
    //w3schools & Mozilla
    const deleted = list.filter((task, i) => {
      return i != index;
    });
    setList(deleted);
  }

  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        color={task.color}
        icon={task.icon}
        openEditForm={openEditTask}
        index={index}
        deleteTask={deleteTask}
      ></Task>
    );
  });

  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width="4">
            <Button icon="bars"></Button>
          </Grid.Column>
          <Grid.Column width="8">
            <Header textAlign="center" as="h1">
              Todo List
            </Header>
          </Grid.Column>
          <Grid.Column width="4" textAlign="right">
            <Button icon="plus" color="green" onClick={openNewTask}></Button>
          </Grid.Column>
        </Grid>
        {newTaskOpen ? (
          <NewTaskForm
            closeNewTask={closeNewTask}
            newTask={newTask}
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          ></NewTaskForm>
        ) : null}

        {editCurrentTask > -1 ? (
          <EditTaskForm
            index={editCurrentTask}
            list={list}
            editTask={editTask}
            closeEditTask={closeEditTask}
          ></EditTaskForm>
        ) : null}

        <List>{taskList}</List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
