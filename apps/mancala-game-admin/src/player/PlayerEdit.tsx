import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { MoveTitle } from "../move/MoveTitle";

export const PlayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="currentGame" source="currentGame" />
        <ReferenceArrayInput
          source="moves"
          reference="Move"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MoveTitle} />
        </ReferenceArrayInput>
        <TextInput label="playerName" source="playerName" />
        <NumberInput step={1} label="score" source="score" />
      </SimpleForm>
    </Edit>
  );
};
