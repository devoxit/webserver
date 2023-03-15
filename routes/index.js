const router = require("express").Router()
const fs = require('fs')
const path = require('path')
const extension = (p) => {

    switch (p) {
        case 'windows':
            return ".exe"
        case 'linux':
            return ".sh"
        default:
            return ""
    }
}


const getter = (req, res) => {
    try {

        var { pl } = req.params
        var { platform } = req.headers
        var _path = ""
        if (['node', 'aws', 'git', 'sc1', 'ransim'].indexOf(pl) < 0) {
            return res.status(404).json({ error: "Not found" })
        }
        var ext = extension(platform)

        _path = path.join(__dirname, `../payloads/${pl}${ext}`)

        res.download(_path, `${pl}${ext}`)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Server error" })
    }
}



router.get("/:pl", getter)
module.exports = router