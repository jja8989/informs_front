This is a web visualization system for endline reports published by..
 <!-- [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). -->

## Getting Started

First, go inside the existing container(endline-web) or make the docker container with image (node-with-conda)

you can make your own container with following command
```bash
docker run -it -d -v $(pwd):/app -w /app -name [your conatiner name] node-with-conda
```
-v : for mounting

-d : background

-it : interactive option for terminal use

-w : working directory

-name : set the container name

```bash
git clone https://github.com/jja8989/endline.git

npm install 
or
yarn install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
