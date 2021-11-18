import { Server } from "./server";
import { Configuration } from "./config";

const myServer = new Server(Configuration);
myServer.bootstrap();