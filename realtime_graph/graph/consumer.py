from channels.generic.websocket import AsyncWebsocketConsumer

import json
from asyncio import sleep
from random import randint

class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):

        await self.accept()

        for i in range(1000):
            await self.send(json.dumps({'value':randint(-20,20)}))
            await sleep(1)




