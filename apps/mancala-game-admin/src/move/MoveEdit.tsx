import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { PitTitle } from "../pit/PitTitle";
import { PlayerTitle } from "../player/PlayerTitle";

export const MoveEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="pit.id" reference="Pit" label="pit">
          <SelectInput optionText={PitTitle} />
        </ReferenceInput>
        <ReferenceInput source="player.id" reference="Player" label="player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
