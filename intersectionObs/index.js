class MyIntersectionObserver {
    constructor(callback) {
        this.entries = [];
        
        this.isIntersecting = function(entry) {
            const windowBottomScrollPosition = window.scrollY + window.innerHeight;
            return windowBottomScrollPosition > entry.top && window.scrollY < entry.top
        }
        
        this.handleScroll = () => {
            if(!this.entries.length) return;
            this.entries.forEach((e,index) => {
                if(!this.entries[index].isIntersecting && this.isIntersecting(e)) {
                    this.entries[index].isIntersecting = true;
                    callback(this.entries)
                }else if(this.entries[index].isIntersecting && !this.isIntersecting(e)) {
                    this.entries[index].isIntersecting = false;
                    callback(this.entries)
                }
            })
            // callback(this.entries);
        }
        window.addEventListener('scroll', this.handleScroll)
    }

    observe(element) {
        
        this.entries.push({
            isIntersecting: false,
            target: element,
            top: element.getBoundingClientRect().top,
            bottom: element.getBoundingClientRect().bottom,
        })
        this.handleScroll()
    }
}
const observer = new MyIntersectionObserver(entries => {
    entries.forEach((e) => {
        if(e.isIntersecting) {
            e.target.classList.add('show')
        }else {
            e.target.classList.remove('show')
        }
    })
})

function handle(){
    document.querySelectorAll('.section').forEach((node) => {
        observer.observe(node)
    })
}

window.addEventListener("DOMContentLoaded",handle)