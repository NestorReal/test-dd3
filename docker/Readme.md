### Docker image to build the project

From the root directory of the project, run:

```
docker build -t test-frontend -f docker/Dockerfile .
```

This will build an image with all the node dependecies to build the project.

Then you can build the statuc files with:

```
docker run -v $(pwd)/frontend:/build -e APP_API=http://localhost:8000 test-frontend
```

This will create the static files in the frontend directory of your current path.
