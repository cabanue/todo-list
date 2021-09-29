import React from "react";

import { List, Grid, Label, Button, Icon, Divider } from "semantic-ui-react";

const Task = ({ name, color, icon, deleteTask, index, openEditForm }) => {
  function editCurrentTask() {
    openEditForm(index);
  }

  function deleteCurrentTask() {
    deleteTask(index);
  }

  return (
    <React.Fragment>
      <List.Item>
        <Divider />
        <Grid columns="2">
          <Grid.Column>
            <Label color={color} size="big">
              <Icon name={icon} />
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button
              onClick={editCurrentTask}
              icon="pencil"
              color="orange"
            ></Button>
            <Button
              onClick={deleteCurrentTask}
              icon="trash"
              color="red"
            ></Button>
          </Grid.Column>
        </Grid>
        <Divider />
      </List.Item>
    </React.Fragment>
  );
};

export default Task;
