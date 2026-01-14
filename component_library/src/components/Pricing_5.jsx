import './Pricing_5.css';

function Pricing_5() {
    const plans = [
        {
            name: 'Basic',
            price: '$19',
            period: 'per month',
            features: ['Feature One', 'Feature Two', 'Feature Three']
        },
        {
            name: 'Pro',
            price: '$49',
            period: 'per month',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four']
        },
        {
            name: 'Enterprise',
            price: '$99',
            period: 'per month',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four', 'Feature Five']
        }
    ];

    return (
        <div className='pricing-container-v5'>
            <h2 className='pricing-title-v5'>Simple Pricing</h2>
            <div className='pricing-table-v5'>
                {plans.map((plan, index) => (
                    <div key={index} className='pricing-row-v5'>
                        <div className='plan-info-v5'>
                            <h3 className='plan-name-v5'>{plan.name}</h3>
                        </div>
                        <div className='plan-price-section-v5'>
                            <span className='price-amount-v5'>{plan.price}</span>
                            <span className='price-period-v5'>{plan.period}</span>
                        </div>
                        <div className='plan-features-v5'>
                            {plan.features.map((feature, idx) => (
                                <span key={idx} className='feature-tag-v5'>{feature}</span>
                            ))}
                        </div>
                        <div className='plan-action-v5'>
                            <button className='plan-button-v5'>Choose</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing_5;
