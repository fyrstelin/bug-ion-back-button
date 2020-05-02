import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import ReactDOM from 'react-dom';
import { IonReactRouter } from '@ionic/react-router'
import { IonRouterOutlet, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonButton, IonTitle, IonList, IonItem, IonLabel } from '@ionic/react';
import { Route } from 'react-router';


const Root = () => {
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          Root
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel>1. Visit child page:</IonLabel>
          <IonButton routerLink='/child'>Child</IonButton>
        </IonItem>

        <IonItem>
          <IonLabel>3. invoke browsers back function</IonLabel>
          <IonButton onClick={() => window.history.back()}>Go back</IonButton>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
}

const Child = () => <IonPage>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot='start'>
        <IonBackButton/>
      </IonButtons>
      <IonTitle>
        Child
      </IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
    2. go back using the IonBackButton
  </IonContent>
</IonPage>

const App = () => <IonReactRouter>
  <IonRouterOutlet>
    <Route exact path='/'>
      <Root/>
    </Route>
    <Route path='/child'>
      <Child/>
    </Route>
  </IonRouterOutlet>
</IonReactRouter>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
