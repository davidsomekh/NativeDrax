import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { DraxProvider, DraxView } from "react-native-drax";

const App = () => {
  const [received, setReceived] = React.useState([]);
  const [staged, setStaged] = React.useState([]);
  return (
    <DraxProvider>
      <View style={styles.container}>
      
        <View style={styles.palette}>
          <DraxView style={styles.item} dragPayload={"Red"}>
            <Text>Red</Text>
          </DraxView>
          <DraxView
      
        receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return (
              <>
               
           
                <Text style={styles.received}>{received.join('22')}</Text>
              </>
            );
          }}
          onReceiveDragDrop={(event) => {
            setReceived([
              ...received,
              event.dragged.payload || '?',
            ]);
          }}
        />
          <DraxView style={styles.item}  dragPayload={"Blue"}>
            <Text>Blue</Text>
          </DraxView>
        </View>
      </View>
    </DraxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: "space-evenly",
  },
  item:{
      border:"1px solid black",
      padding:6,
      marginBottom:6,
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  receivingZone: {
    height: 200,
    borderRadius: 10,
  },
  receiving: {
    borderColor: "red",
    borderWidth: 2,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  received: {
    marginTop: 10,
    fontSize: 18,
  },
  palette: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  draggableBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  green: {
    backgroundColor: "#aaffaa",
  },
  blue: {
    backgroundColor: "#aaaaff",
  },
  red: {
    backgroundColor: "#ffaaaa",
  },
  yellow: {
    backgroundColor: "#ffffaa",
  },
  cyan: {
    backgroundColor: "#aaffff",
  },
  magenta: {
    backgroundColor: "#ffaaff",
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: "magenta",
    borderWidth: 2,
  },
  stagedCount: {
    fontSize: 18,
  },
});

export default App;
