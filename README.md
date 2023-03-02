# Deno Docker Template

This repository contains a Super simple docker template for Deno + oak HTTP
server.

## Features

- Quickly launch Deno + oak HTTP server environment.
- Enable VSCode deno plugin by default for easy development
- Support both Intel and ARM architectures.

## Getting Started for VSCode users

To use this template, you need to have Docker installed on your machine. Follow
these steps:

1. Navigate to the repository directory that you just cloned.
2. Launch VSCode by running `./code`
3. Click "Reopen in container"
4. In the terminal window, you can launch Deno http server by running
   `deno task dev`
5. Visit `http://localhost:3003` on your web browser to see the server in
   action.

## Getting Started without VSCode

You can try this repository without using VSCode by following these steps:

1. Navigate to the repository directory that you just cloned.
2. Start the Docker container by running `docker-compose up -d`.
3. Launch the server by running `docker-compose exec deno_app deno task dev`
4. Visit `http://localhost:3003` on your web browser to see the server in
   action.

## License

This project is licensed under the terms of the MIT license. You are free to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the software. See the LICENSE file for more details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create
an issue if you encounter any problems or have any suggestions for improvements.
