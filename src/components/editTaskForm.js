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

const EditTaskForm = ({ index, list, closeEditTask, editTask }) => {
  const currentTask = list[index];
  console.log(currentTask);

  const [editCurrent, setEditCurrent] = React.useState(currentTask);

  function changeNewTask(e, { value, name }) {
    const editCurrentClone = { ...editCurrent };
    editCurrentClone[name] = value;
    setEditCurrent(editCurrentClone);
  }

  function edited() {
    editTask(index, editCurrent);
  }

  function finishEdit() {
    edited();
    closeEditTask();
  }

  return (
    <React.Fragment>
      <Segment>
        <Header as="h2" textAlign="center">
          Edit Task
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
            placeholder="New Name for Task"
            value={editCurrent.name}
            onChange={changeNewTask}
            name="name"
          />
          <Form.Field
            control={Select}
            label="Task Color"
            placeholder="Enter new color"
            options={[
              { text: "Red", value: "red" },
              { text: "Yellow", value: "yellow" },
              { text: "Blue", value: "blue" },
            ]}
            value={editCurrent.color}
            onChange={changeNewTask}
            name="color"
          />
          <Form.Field
            control={Select}
            label="Task Icon"
            placeholder="Choose new icon"
            options={[
              { text: "Work", value: "briefcase" },
              { text: "Doctor's Appointment", value: "user md" },
              { text: "Shopping", value: "shopping cart" },
            ]}
            value={editCurrent.icon}
            onChange={changeNewTask}
            name="icon"
          />
          <Button.Group fluid>
            <Button type="button" color="red" onClick={closeEditTask}>
              Cancel
            </Button>
            <Button.Or />
            <Button type="button" color="green" onClick={finishEdit}>
              Edit
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default EditTaskForm;
