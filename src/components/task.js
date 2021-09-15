import React from "react";

import { List, Grid, Label, Button } from "semantic-ui-react";

const Task = ({ name, color }) => {
  return (
    <React.Fragment>
      <List.Item>
        <Grid columns="2">
          <Grid.Column>
            <Label color={color} size="big">
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button icon="pencil" color="orange"></Button>
            <Button icon="trash" color="red"></Button>
          </Grid.Column>
        </Grid>
      </List.Item>
    </React.Fragment>
  );
};

export default Task;