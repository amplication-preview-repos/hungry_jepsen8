import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { GameTitle } from "../game/GameTitle";
import { MoveTitle } from "../move/MoveTitle";

export const PitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="game.id" reference="Game" label="game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="moves"
          reference="Move"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MoveTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="pitIndex" source="pitIndex" />
        <NumberInput step={1} label="stones" source="stones" />
      </SimpleForm>
    </Create>
  );
};
