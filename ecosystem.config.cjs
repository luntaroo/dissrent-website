module.exports = {
  apps: [
    {
      name: "dissrent",
      cwd: ".",
      script: "npm",
      args: "start -- --hostname 127.0.0.1 --port 3000",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
