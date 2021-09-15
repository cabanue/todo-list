import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Header,
  Container,
  Button,
  Grid,
  Segment,
  Form,
  Select,
  List,
  Label,
} from "semantic-ui-react";

import Task from "../components/Task";

const HomePage = () => {
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
            <Button icon="plus" color="green"></Button>
          </Grid.Column>
        </Grid>
        <Segment>
          <Header as="h2">New Task</Header>
          <Form>
            <Form.Field
              control="input"
              label="Task Name"
              placeholder="Enter Task Name..."
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
            />
            <Button.Group fluid>
              <Button color="red">Cancel</Button>
              <Button.Or />
              <Button color="green">Add Task</Button>
            </Button.Group>
          </Form>
        </Segment>
        <List>
          <Task name="Task 1" color="yellow"></Task>
          <Task name="Task 2" color="red"></Task>
        </List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
