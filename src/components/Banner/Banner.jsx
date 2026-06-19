import './Banner.css'

/**
 * @typedef {Object} BannerImage
 * @property {string} src
 * @property {string} name
 */

/**
 * @typedef {Object} BannerProps
 * @property {BannerImage[]} images
 */

/**
 * @param {BannerProps} props
 */
export default function Banner({ images = [] }) {
    const trackImages = [...images, ...images]

    return (
        <div className="carousel" aria-label="Image banner">
            <div className="group">
                {trackImages.map((image, index) => (
                    <figure className="card" key={`${image.name}-${index}`}>
                        <img src={image.src} alt={image.name} loading="lazy" />
                    </figure>
                ))}
            </div>
            <div aria-hidden="true" className="group">
                {trackImages.map((image, index) => (
                    <figure className="card" key={`${image.name}-copy-${index}`}>
                        <img src={image.src} alt="" loading="lazy" />
                    </figure>
                ))}
            </div>
        </div>
    )
}