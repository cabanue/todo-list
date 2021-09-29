import React from "react";
import {
  Segment,
  Header,
  Form,
  Button,
  Select,
  Input,
  Image,
} from "semantic-ui-react";

const newTaskForm = ({ closeNewTask, newTask, setNewTask, addNewTask }) => {
  function changeNewTask(e, { value, name }) {
    const newTaskClone = { ...newTask };
    newTaskClone[name] = value;
    setNewTask(newTaskClone);
  }

  return (
    <React.Fragment>
      <Segment>
        <Header as="h2" textAlign="center">
          New Task
        </Header>
        <Image
          src="https://www.computerhope.com/jargon/t/task.png"
          size="medium"
          centered
        />
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder="Enter Task Name..."
            value={newTask.name}
            onChange={changeNewTask}
            name="name"
          />
          <Form.Field
            control={Select}
            label="Task Color"
            placeholder="Choose task color"
            options={[
              { text: "Red", value: "red" },
              { text: "Yellow", value: "yellow" },
              { text: "Blue", value: "blue" },
            ]}
            value={newTask.color}
            onChange={changeNewTask}
            name="color"
          />
          <Form.Field
            control={Select}
            label="Task Icon"
            placeholder="Choose task icon"
            options={[
              { text: "Work", value: "briefcase" },
              { text: "Doctor's Appointment", value: "user md" },
              { text: "Shopping", value: "shopping cart" },
            ]}
            value={newTask.icon}
            onChange={changeNewTask}
            name="icon"
          />
          <Button.Group fluid>
            <Button type="button" color="red" onClick={closeNewTask}>
              Cancel
            </Button>
            <Button.Or />
            <Button type="button" color="green" onClick={addNewTask}>
              Add Task
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default newTaskForm;
