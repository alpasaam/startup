class ReviewEventNotifier {
  constructor() {
    this.handlers = [];
    this.events = [];
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    this.socket.onopen = () => {
        console.log('WebSocket connection established');
      };

    this.socket.onmessage = (message) => {
      const event = JSON.parse(message.data);
      this.receiveEvent(event);
    };
  }

  broadcastEvent(from, type, value) {
    console.log('Broadcasting event:', from, type, value);
    const event = new EventMessage(from, type, value);
    this.socket.send(JSON.stringify(event));
    this.receiveEvent(event); // Update the array locally as well
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.events.forEach((e) => {
      this.handlers.forEach((handler) => {
        handler(e);
      });
    });
  }
}

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

const ReviewEvent = {
  Submit: 'submit',
};

const ReviewNotifier = new ReviewEventNotifier();
export { ReviewEvent, ReviewNotifier };