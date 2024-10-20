import { AutoRouter, json as JsonResponse, error as ErrorResponse } from "itty-router";
import { Collection } from "@discordjs/collection";

export default class Worker {
	constructor() {
		this.router = new AutoRouter();
		this.fetch = this.router.fetch.bind(this.router);
		this.commands = new Collection();

		// Do setup for the different routes
		this.router.post('/commands', verifyDiscordRequest, commandHandler);
	}

	commandHandler(request, env, context) {
		
	}

	get(path) {

	}

	on(event, handler) {
		this.events[event] = handler;
	}

	once(event, handler) {
		this.events[event] = handler;
	}

	emit(event, data) {
		this.events[event](data);
	}
}