const PageContent = ({ children }) => {
    return(
        <main className="page-content">
            <div className="content-container">
                {children}
            </div>
        </main>
    );
}

export default PageContent;
