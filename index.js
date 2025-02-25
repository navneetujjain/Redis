import net from "net";
import Parser from "redis-parser"

const port = 8000;

const store = {};

const server = net.createServer(connection => {
    console.log(`Client Connected`);

    connection.on('data', data => {
        const parser = new Parser({
            returnReply: (reply) => {
                const command = reply[0];

                switch(command) {
                    case 'set' : {
                        const key = reply[1];
                        const value = reply[2];
                        store[key] = value;
                        connection.write('+Ok\r\n');
                    }

                    break;

                    case 'get' : {
                        const key = reply[1];
                        console.log({key, value : store[key]});
                        const value = store[key];
                        if(!value){
                            connection.write('$-1\r\n');
                        }
                        else connection.write(`$${value.length}\r\n${value}\r\n`)
                    }
                }
            },
            returnError: (err) => {
                console.log('=>', err);
            }
        })
        parser.execute(data);
        //connection.write('+Thank You For Reaching Out To Us\r\n')
    })
})


server.listen(port, () => {
    console.log(`Redis server running on port ${port}`)
})