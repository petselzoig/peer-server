// Generated by CoffeeScript 1.6.2
(function() {
  $(document).ready(function() {
    var appView, clientServer, routeCollection, serverFileCollection, userDatabase;

    serverFileCollection = new ServerFileCollection();
    routeCollection = new RouteCollection();
    userDatabase = new UserDatabase();
    appView = new AppView({
      serverFileCollection: serverFileCollection,
      routeCollection: routeCollection,
      userDatabase: userDatabase
    });
    return clientServer = new ClientServer({
      serverFileCollection: serverFileCollection,
      routeCollection: routeCollection,
      appView: appView,
      userDatabase: userDatabase
    });
  });

}).call(this);

/*
//@ sourceMappingURL=init.map
*/
