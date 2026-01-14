import './Pricing_4.css';

function Pricing_4() {
    const plans = [
        {
            name: 'Basic',
            price: '$19',
            period: '/month',
            description: 'Perfect for getting started',
            features: ['Feature One', 'Feature Two', 'Feature Three']
        },
        {
            name: 'Pro',
            price: '$49',
            period: '/month',
            description: 'For growing businesses',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four'],
            popular: true
        },
        {
            name: 'Enterprise',
            price: '$99',
            period: '/month',
            description: 'For large organizations',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four', 'Feature Five']
        }
    ];

    return (
        <div className='pricing-container-v4'>
            <h2 className='pricing-title-v4'>Our Plans</h2>
            <div className='pricing-cards-v4'>
                {plans.map((plan, index) => (
                    <div key={index} className={`pricing-card-v4 ${plan.popular ? 'featured' : ''}`}>
                        {plan.popular && <div className='featured-badge-v4'>Best Value</div>}
                        <div className='card-header-v4'>
                            <h3 className='plan-name-v4'>{plan.name}</h3>
                            <p className='plan-description-v4'>{plan.description}</p>
                            <div className='plan-price-v4'>
                                <span className='price-amount-v4'>{plan.price}</span>
                                <span className='price-period-v4'>{plan.period}</span>
                            </div>
                        </div>
                        <ul className='plan-features-v4'>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className='feature-item-v4'>
                                    <span className='check-icon-v4'>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className='plan-button-v4'>Start Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing_4;
