import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { PitTitle } from "../pit/PitTitle";
import { PlayerTitle } from "../player/PlayerTitle";

export const MoveCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="pit.id" reference="Pit" label="pit">
          <SelectInput optionText={PitTitle} />
        </ReferenceInput>
        <ReferenceInput source="player.id" reference="Player" label="player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
