import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PIT_TITLE_FIELD } from "../pit/PitTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const MoveShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="pit" source="pit.id" reference="Pit">
          <TextField source={PIT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
