#!/usr/bin/env node

// console.log('Node.js version:', 'v' + process.versions.node)
// console.log('V8 version:', process.versions.v8)

const {versions: {node, v8}} = process,
      output = `Node.js version: ${node}\nV8 version: ${v8}`

console.log(output)
