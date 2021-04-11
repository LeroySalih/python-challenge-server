const Component = ({title, lo}) => (
    <>
    <div className="lesson-header-grid">
        <div className="lesson-title">{title}</div>
        <div className="lo-title">Learning Objective</div>
        <div className="lo">{lo}</div>
    </div>
    <style jsx>{`
        .lesson-header-grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-areas: "title lo-title" "title lo";
            grid-gap: 10px;
            margin-top: 20px;
            margin-bottom: 30px;
        }

        .lesson-title {
            margin-top: 1rem;
            font-family: 'Cutive Mono', monospace;
            
            font-size: 4rem;
            grid-area: title;
            background-color: #35276d;
            color: #fff903;
            margin-top: 0px;
            padding-left: 10px;
            padding-top: 30px;
            padding-bottom: 30px;
            border-radius: 10px;
        }

        .lo-title {
            grid-area: lo-title
            display: flex;
            align-items: flex-end;
            border-bottom: silver 2px solid;
            font-family: 'Roboto Condensed', sans-serif;
            font-size: 1.2rem;
            color: #2e307b;
        }
        
        .lo {
            grid-area: lo;
            font-family: 'Roboto Condensed', sans-serif;
            font-size: 2rem;
            color: #2e307b;
        }

    `}</style>
    </>
);


export default Component;