from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import os
from urllib.parse import urlparse


PORT = int(os.environ.get("PORT", "8000"))


class CodeZHandler(SimpleHTTPRequestHandler):
    """Small backend scaffold for the university-project demo.

    The frontend persists data in localStorage for instant use. These JSON
    endpoints show where a Python backend would connect to MySQL in a fuller
    deployment.
    """

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/health":
            return self.write_json({"ok": True, "app": "CodeZ"})
        if path == "/api/lessons":
            return self.write_json({"message": "Lessons are bundled in app.js for offline-first learning."})
        return super().do_GET()

    def do_POST(self):
        path = urlparse(self.path).path
        length = int(self.headers.get("Content-Length", "0"))
        payload = self.rfile.read(length).decode("utf-8") if length else "{}"
        try:
            data = json.loads(payload)
        except json.JSONDecodeError:
            data = {}
        if path == "/api/progress":
            return self.write_json({"saved": True, "received": data})
        self.send_error(404, "Unknown API endpoint")

    def write_json(self, data):
        body = json.dumps(data, indent=2).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), CodeZHandler)
    print(f"CodeZ running at http://127.0.0.1:{PORT}")
    server.serve_forever()
