// Generated by CoffeeScript 1.6.2
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.ClientDataChannel = (function() {
    function ClientDataChannel(onDataCallback) {
      var options;

      this.onDataCallback = onDataCallback;
      this.onError = __bind(this.onError, this);
      this.onData = __bind(this.onData, this);
      this.onOpen = __bind(this.onOpen, this);
      if (isDevelopmentServer()) {
        options = {
          host: location.hostname,
          port: 9000,
          config: {
            'iceServers': []
          }
        };
      } else {
        options = {
          key: "rrvwvw4tuyxpqfr",
          config: {
            "iceServers": []
          }
        };
      }
      if (this.id) {
        this.peer = new Peer(this.id, options);
      } else {
        this.peer = new Peer(options);
      }
      this.peer.on("open", this.onOpen);
      this.peer.on("error", this.onError);
    }

    ClientDataChannel.prototype.onOpen = function(id) {
      return this.id = id;
    };

    ClientDataChannel.prototype.onData = function(data) {
      return this.onDataCallback(data);
    };

    ClientDataChannel.prototype.onError = function(error) {
      if (error.type === "unavailable-id") {
        if (this.onUnavailableID) {
          return this.onUnavailableID();
        }
      } else if (error.type === "invalid-id") {
        if (this.onInvalidID) {
          return this.onInvalidID();
        }
      }
    };

    return ClientDataChannel;

  })();

}).call(this);

/*
//@ sourceMappingURL=ClientDataChannel.map
*/
