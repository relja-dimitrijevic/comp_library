import './Pricing.css';

function Pricing() {
    const plans = [
        {
            name: 'Basic',
            price: '$19',
            period: '/month',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four']
        },
        {
            name: 'Pro',
            price: '$49',
            period: '/month',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four', 'Feature Five'],
            popular: true
        },
        {
            name: 'Enterprise',
            price: '$99',
            period: '/month',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four', 'Feature Five', 'Feature Six']
        }
    ];

    return (
        <div className='pricing-container'>
            <h2 className='pricing-title'>Pricing Plans</h2>
            <div className='pricing-grid'>
                {plans.map((plan, index) => (
                    <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                        {plan.popular && <div className='popular-badge'>Popular</div>}
                        <h3 className='plan-name'>{plan.name}</h3>
                        <div className='plan-price'>
                            <span className='price-amount'>{plan.price}</span>
                            <span className='price-period'>{plan.period}</span>
                        </div>
                        <ul className='plan-features'>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className='feature-item'>{feature}</li>
                            ))}
                        </ul>
                        <button className='plan-button'>Choose Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;
