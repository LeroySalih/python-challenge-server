const Component = ({code}) => {
    return (<section>
    <div className="section-title">Practice</div>
    <div>Copy and paste the following command to the Shell tab</div>
    <div className="acticvity-code">get {code}</div>
    <iframe height="400px" width="100%" 
        src="https://replit.com/@mrsalih/Test-4?lite=true" 
        scrolling="no" 
        frameBorder="no" 
        allowtransparency="true"
        allowFullScreen={true} 
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
        
    </iframe>
    </section>)
}