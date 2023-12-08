import express from 'express';
import cors from 'cors'
import SSE from 'express-sse';
import launchMiddleware from 'launch-editor-middleware';
import { testCaseWatcher } from './watcher.cjs'

const app = express();
const sse = new SSE();

app.use(cors())

app.get('/stream', (req,res)=>{
    //
    sse.init(req, res);
    //
    testCaseWatcher({
        root:'',
        onMetaInfoChanged: (metaInfo) => {
            sse.send(metaInfo);
        }
    })
});

// __open-in-editor\?file\=/Users/zhiyu/Desktop/coding/cli-test/etools-pipeline/jest.config.js
app.get('/__open-in-editor', launchMiddleware())

app.listen(9999,()=>{
    console.log(`Server listening on http://localhost:9999`)
})
