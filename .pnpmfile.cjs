function readPackage(pkg, context) {
  // Override the manifest of foo@1.x after downloading it from the registry
  if (pkg.dependencies && pkg.peerDependencies) {
    if(pkg.dependencies["pnpm-foo"] && pkg.dependencies["foo-peer"]){
      pkg.dependencies["foo-peer"] = "1.0.0"
    }
  }
  console.log('pkg:',pkg);
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
}