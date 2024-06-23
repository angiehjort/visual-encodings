
export default function SendFiles(selector, supabase) {

    const element = d3.select(selector)
        .on("click", (e) => {
            if (e.target !== element.node()) return;
            element.style("display", null);
            onClose();
        })
        .on("submit", e => {onSend(e)})
        .on("drop", e => {allowDrop(e)})
        .on("dragover", e => {allowDrop(e)});

    const dropZone = element.select(".ve-dropzone")
        .on("dragenter", e => {dragenter(e)})
        .on("dragleave", e => {dragleave(e)})
        .on("dragover", e => {allowDrop(e)})
        .on("drop", e => {onDrop(e)});

    const sendForm = element.select(".ve-startproject")
    const inputFiles = element.select(".ve-openfile");
    const email = element.select(".ve-email");
    const status = element.select(".ve-status");

    const popup = d3.select(".ve-startproject-outer-overlay");

    d3.selectAll(".ve-cta")
        .on("click", () => {
            const email = "info@visual-encodings.com";
            const subject = "Collaboration request";
            const emailBody = "Please provide info about your organisation and how you would like to collaborate. Attach example data files if you have any.";
            document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;

            //popup.style("display", "flex")
        })


    function onDrop(e) {
        e.preventDefault();

        inputFiles.node().files = e.dataTransfer.files;
    }
    
    function dragleave(e){
        dropZone.text("Drop files here")
    }

    function dragenter(e){
        dropZone.text("Drop now!")
    }

    function allowDrop(e) {
        e.preventDefault();
    }

    async function onSend(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get("email");
        const files = data.getAll("files");

        sendForm.classed("ve-uploading", true);
        status.text("Sending...");

        Promise.all(files.map(async file => await supabase.storage.from("demo_data").upload(`${email}/${file.name}`, file, {
            upsert: true,
        }))).then(result => onSent(result))
    }

    function onSent(result) {
        if (result.every(({error}) => !error)) {
            status.text("Files uploaded successfully. We will contact you by email when your demo is ready.");
        } else {
            status.text("Error! Please try again.");
        }
    }

    function onClose() {
        inputFiles.node().value = "";
        email.node().value = "";
        status.text("");
        sendForm.classed("ve-uploading", false);
    }
}


