const core = require("@actions/core")
const github = require("@actions/github")
const exec = require("@actions/exec")

function run() {
    // get some input values
    const bucket = core.getInput('bucket', {required: true})
    const bucketRegion = core.getInput('region', {required: true})
    const distFolder = core.getInput('dist-folder', {required: true})


    // upload my files
    const s3URI = `s3://${bucket}`
    // aws cli comes with the action runner base packages
    exec.exec(`aws s3 sync ${distFolder} ${s3URI} --region ${bucketRegion}`)
    core.notice("Hello from my custom js action!")
}


run();