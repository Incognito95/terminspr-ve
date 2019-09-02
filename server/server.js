module.exports = async function(app) { // Async function - no need to make callbacks or promises
    try {
        await app.listen(3000);
        console.log('Application runs on port 3000');
    } catch (error) {
        console.error(error);
        process.exit(1); // closes the program
    }
}