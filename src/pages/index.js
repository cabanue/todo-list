import React from "react";
import "semantic-ui-css/semantic.css";
import { Header, Container, Button, Grid, List } from "semantic-ui-react";

import Task from "../components/Task";
import NewTaskForm from "../components/newTaskForm";

const HomePage = () => {
  const initialNewTask = {
    name: "",
    color: "",
  };

  const [newTaskOpen, setNewTaskOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState(initialNewTask);
  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask() {
    setNewTaskOpen(false);
  }

  function addNewTask() {
    const listClone = [...list];
    listClone.push(newTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }

  // const taskList = [];

  // list.forEach((task, index) => {
  //   taskList.push(
  //     <Task
  //       key={`${task.name}-${index}`}
  //       name={task.name}
  //       color={task.color}
  //     ></Task>
  //   );
  // });

  function editTask(index) {
    console.log("edit", index);
    const newList = list.map((task, i) => {
      if (i !== index) return task;
      return {
        name: `Edit ${task.name}`,
        color: task.color,
      };
    });
    setList(newList);
  }

  function deleteTask() {
    //Array.filter
    //^^look that up
    //w3schools & Mozilla
  }

  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        color={task.color}
        editTask={editTask}
        index={index}
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

        {/* {newTaskOpen ? (
          <newTaskForm closeNewTask={closeNewTask}></newTaskForm>
        ) : null} */}

        {newTaskOpen ? (
          <NewTaskForm
            closeNewTask={closeNewTask}
            newTask={newTask}
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          ></NewTaskForm>
        ) : null}

        <List>{taskList}</List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
