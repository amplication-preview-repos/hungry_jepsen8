import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PIT_TITLE_FIELD } from "./PitTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { GAME_TITLE_FIELD } from "../game/GameTitle";

export const PitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="game" source="game.id" reference="Game">
          <TextField source={GAME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="pitIndex" source="pitIndex" />
        <TextField label="stones" source="stones" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Move" target="pitId" label="Moves">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="pit" source="pit.id" reference="Pit">
              <TextField source={PIT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
