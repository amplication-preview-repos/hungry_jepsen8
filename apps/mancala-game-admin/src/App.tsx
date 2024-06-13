import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { GameList } from "./game/GameList";
import { GameCreate } from "./game/GameCreate";
import { GameEdit } from "./game/GameEdit";
import { GameShow } from "./game/GameShow";
import { PitList } from "./pit/PitList";
import { PitCreate } from "./pit/PitCreate";
import { PitEdit } from "./pit/PitEdit";
import { PitShow } from "./pit/PitShow";
import { MoveList } from "./move/MoveList";
import { MoveCreate } from "./move/MoveCreate";
import { MoveEdit } from "./move/MoveEdit";
import { MoveShow } from "./move/MoveShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MancalaGame"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="Game"
          list={GameList}
          edit={GameEdit}
          create={GameCreate}
          show={GameShow}
        />
        <Resource
          name="Pit"
          list={PitList}
          edit={PitEdit}
          create={PitCreate}
          show={PitShow}
        />
        <Resource
          name="Move"
          list={MoveList}
          edit={MoveEdit}
          create={MoveCreate}
          show={MoveShow}
        />
      </Admin>
    </div>
  );
};

export default App;
