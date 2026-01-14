import './Pricing_2.css';

function Pricing_2() {
    const plans = [
        {
            name: 'Basic',
            price: '$19',
            period: '/month',
            features: ['Feature One', 'Feature Two', 'Feature Three']
        },
        {
            name: 'Pro',
            price: '$49',
            period: '/month',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four']
        },
        {
            name: 'Enterprise',
            price: '$99',
            period: '/month',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four', 'Feature Five']
        }
    ];

    return (
        <div className='pricing-container-v2'>
            <h2 className='pricing-title-v2'>Choose Your Plan</h2>
            <div className='pricing-list-v2'>
                {plans.map((plan, index) => (
                    <div key={index} className='pricing-item-v2'>
                        <div className='pricing-header-v2'>
                            <h3 className='plan-name-v2'>{plan.name}</h3>
                            <div className='plan-price-v2'>
                                <span className='price-amount-v2'>{plan.price}</span>
                                <span className='price-period-v2'>{plan.period}</span>
                            </div>
                        </div>
                        <ul className='plan-features-v2'>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className='feature-item-v2'>{feature}</li>
                            ))}
                        </ul>
                        <button className='plan-button-v2'>Select</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing_2;
