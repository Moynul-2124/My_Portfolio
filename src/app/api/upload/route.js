



import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
    api: {
        bodyParser: false, // We disable Next.js body parsing for formidable
    },
};

export async function POST(req) {
    const form = new formidable.IncomingForm({
        uploadDir: path.join(process.cwd(), "/public/uploads"),
        keepExtensions: true,
        maxFileSize: 200 * 1024 * 1024, // 200MB limit
    });

    // Make sure upload folder exists
    if (!fs.existsSync(form.uploadDir)) {
        fs.mkdirSync(form.uploadDir, { recursive: true });
    }

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) {
                reject(new Response(JSON.stringify({ error: err.message }), { status: 500 }));
                return;
            }

            // files.video is the uploaded file field (from frontend)
            const file = files.video;

            if (!file) {
                resolve(new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 }));
                return;
            }

            // Return public URL path of uploaded video
            const fileName = path.basename(file.filepath);
            const videoUrl = `/uploads/${fileName}`;

            resolve(
                new Response(JSON.stringify({ url: videoUrl }), {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                })
            );
        });
    });
}
