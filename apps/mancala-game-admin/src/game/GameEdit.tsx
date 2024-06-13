import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { PitTitle } from "../pit/PitTitle";

export const GameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="currentPlayer" source="currentPlayer" />
        <ReferenceArrayInput
          source="pits"
          reference="Pit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PitTitle} />
        </ReferenceArrayInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
