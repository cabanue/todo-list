import React from "react";
import {
  Segment,
  Header,
  Form,
  Button,
  Select,
  Input,
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
        <Header as="h2">New Task</Header>
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
